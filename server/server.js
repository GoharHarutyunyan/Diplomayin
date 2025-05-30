import express from "express";
import fs from "fs/promises";
import path from "path";

const app = express();
const PORT = 3000;
function renderTemplate(template, data) {
    return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
      return data[key] || "";
    });
  }

app.use(express.static(path.resolve("client")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const homepage = path.resolve("client/index.html");

  try {
    const homepageTemplate = await fs.readFile(homepage, "utf-8");
    const finalHtml = renderTemplate(homepageTemplate, {});
    res.type("html").send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});

app.get("/hayastan", async (req, res) => {
  const aboutarm = path.resolve("client/aboutarm.html");

  try {
    const aboutarmTemplate = await fs.readFile(aboutarm, "utf-8");
    const finalHtml = renderTemplate(aboutarmTemplate, {});
    res.type("html").send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});
app.get("/marzer", async (req, res) => {
  const provinces = path.resolve("client/provinces.html");

  try {
    const provincesTemplate = await fs.readFile(provinces, "utf-8");
    const finalHtml = renderTemplate(provincesTemplate, {});
    res.type("html").send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});
app.get("/patkerasrah", async (req, res) => {
  const gallery = path.resolve("client/gallery.html");

  try {
    const galleryTemplate = await fs.readFile(gallery, "utf-8");
    const finalHtml = renderTemplate(galleryTemplate, {});
    res.type("html").send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});
app.get("/contact", async (req, res) => {
  const contact = path.resolve("client/contact.html");

  try {
    const contactTemplate = await fs.readFile(contact, "utf-8");
    const finalHtml = renderTemplate(contactTemplate, {});
    res.type("html").send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});
app.get("/register", async (req, res) => {
  const register = path.resolve("client/register.html");

  try {
    const registerTemplate = await fs.readFile(register, "utf-8");
    const finalHtml = renderTemplate(registerTemplate, {});
    res.type("html").send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});
app.post("/register", async (req, res) => {
  const { email, name, lastname, password } = req.body;
  const dbPath = path.resolve("server/DB/data.json");

  try {
    let db = { users: [], currentUser: {} };

    try {
      const fileData = await fs.readFile(dbPath, "utf-8");
      if (fileData.length > 0) {
        db = JSON.parse(fileData);
      }
    } catch (error) {
      // Եթե ֆայլը չկա, թող դատարկ բազա մնա
    }

    const newUser = db.users.find((user) => user.email === email);

    if (!newUser) {
      const registrationDate = new Date().toLocaleDateString(); // Ստանում ենք ընթացիկ ամսաթիվը

      db.users.push({
        email,
        name,
        lastname,
        registrationDate,
        password,
        favorite: []
      });
      await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
      res.json({ success: true, message: "Գրանցումը հաջողությամբ կատարվեց" });
    } else {
      res.json({ success: false, message: "Այս տվյալներով արդեն կա գրանցված" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Սերվերի սխալ գրանցման ժամանակ");
  }
});

app.get("/login", async (req, res) => {
  const login = path.resolve("client/login.html");

  try {
    const loginTemplate = await fs.readFile(login, "utf-8");
    const finalHtml = renderTemplate(loginTemplate, {});
    res.type("html").send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const dbPath = path.resolve("server/DB/data.json");

  try {
    const fileData = await fs.readFile(dbPath, "utf-8");
    const db = JSON.parse(fileData);
    const users = db.users || [];

    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      if (foundUser.password === password) {
        db.currentUser = foundUser;
        await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
        res.json({ success: true, message: "Հաջողությամբ մուտք գործեցիք" });
      } else {
        res.status(401).json({
          success: false,
          message: "էլ․ հասցեն կամ գաղտնաբառը սխալ է",
        });
      }
    } else {
      res.status(401).json({
        success: false,
        message: "էլ․ հասցեն կամ գաղտնաբառը սխալ է",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Սերվերի սխալ մուտքի ժամանակ");
  }
});

app.get("/currentuser", async (req, res) => {
  const dbPath = path.resolve("server/DB/data.json");

  try {
    const fileData = await fs.readFile(dbPath, "utf-8");
    const db = JSON.parse(fileData);

    const currentUser = db.currentUser;

    if (!currentUser) {
      return res.status(404).json({ message: "Մուտք գործած օգտատեր չկա" });
    }

    res.json(currentUser);
  } catch (err) {
    console.error("Սխալ /currentuser-ում:", err);
    res.status(500).send("Սերվերի սխալ");
  }
});

app.use((req, res) => {
  res.status(404).send("Էջը չի գտնվել");
});

app.listen(PORT, () => {
  console.log(`Սերվերը աշխատում է http://localhost:${PORT}`);
});
