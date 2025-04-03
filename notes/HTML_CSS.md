# 📜 HTML & CSS Cheatsheet

## 🏗️ HTML - Grundlegende Elemente

### 🌐 Dokumentstruktur
| Tag | Bedeutung | Beispiel |
|------|------------|-------------|
| `<!DOCTYPE html>` | Definiert den Dokumenttyp | `<!DOCTYPE html>` |
| `<html>` | Wurzelelement | `<html>...</html>` |
| `<head>` | Enthält Metadaten | `<head>...</head>` |
| `<title>` | Titel der Webseite | `<title>Meine Seite</title>` |
| `<meta>` | Metainformationen | `<meta charset="UTF-8">` |
| `<link>` | Externe Stylesheets | `<link rel="stylesheet" href="style.css">` |
| `<script>` | JavaScript einbinden | `<script src="script.js"></script>` |
| `<body>` | Enthält den sichtbaren Seiteninhalt | `<body>...</body>` |

### 📝 Text & Struktur
| Tag | Bedeutung | Beispiel |
|------|------------|-------------|
| `<h1>` - `<h6>` | Überschriften (h1 = größte) | `<h1>Überschrift</h1>` |
| `<p>` | Absatz | `<p>Text</p>` |
| `<br>` | Zeilenumbruch | `Text<br>neue Zeile` |
| `<hr>` | Horizontale Linie | `<hr>` |
| `<blockquote>` | Blockzitat | `<blockquote>Zitat</blockquote>` |
| `<pre>` | Vorgefertigter Text | `<pre>Erhaltener Abstand</pre>` |
| `<code>` | Code-Snippet | `<code>console.log('Hello')</code>` |

### 🔗 Links & Medien
| Tag | Bedeutung | Beispiel |
|------|------------|-------------|
| `<a>` | Hyperlink | `<a href="https://example.com">Link</a>` |
| `<img>` | Bild einfügen | `<img src="bild.jpg" alt="Beschreibung">` |
| `<audio>` | Audio einfügen | `<audio controls><source src="audio.mp3"></audio>` |
| `<video>` | Video einfügen | `<video controls><source src="video.mp4"></video>` |

### 📋 Listen & Tabellen
| Tag | Bedeutung | Beispiel |
|------|------------|-------------|
| `<ul>` | Ungeordnete Liste | `<ul><li>Item</li></ul>` |
| `<ol>` | Geordnete Liste | `<ol><li>Erstes</li></ol>` |
| `<li>` | Listeneintrag | `<li>Listenelement</li>` |
| `<table>` | Tabelle | `<table>...</table>` |
| `<tr>` | Tabellenzeile | `<tr>...</tr>` |
| `<td>` | Tabellenzelle | `<td>Inhalt</td>` |
| `<th>` | Tabellenüberschrift | `<th>Überschrift</th>` |
| `<caption>` | Tabellenbeschreibung | `<caption>Meine Tabelle</caption>` |

### 🖊️ Formulare & Eingaben
| Tag | Bedeutung | Beispiel |
|------|------------|-------------|
| `<form>` | Formular | `<form>...</form>` |
| `<input>` | Eingabefeld | `<input type="text">` |
| `<textarea>` | Mehrzeilige Eingabe | `<textarea></textarea>` |
| `<select>` | Dropdown | `<select><option>Wahl</option></select>` |
| `<button>` | Knopf | `<button>Klick mich</button>` |

---

## 🎨 CSS - Grundlegende Stile

### 🔹 Selektoren
```css
/* Element-Selektor */
p {
    color: blue;
}

/* ID-Selektor */
#meine-id {
    font-size: 20px;
}

/* Klassen-Selektor */
.meine-klasse {
    background-color: yellow;
}

/* Universeller Selektor */
* {
    margin: 0;
    padding: 0;
}

/* Verschachtelte Selektoren */
ul li {
    list-style-type: square;
}
```

### 🎨 Farben & Hintergründe
| Eigenschaft | Bedeutung | Beispiel |
|-------------|------------|-------------|
| `color` | Textfarbe | `color: red;` |
| `background-color` | Hintergrundfarbe | `background-color: lightblue;` |
| `opacity` | Transparenz (0-1) | `opacity: 0.5;` |
| `background-image` | Hintergrundbild | `background-image: url('bild.jpg');` |

### 🔠 Textgestaltung
| Eigenschaft | Bedeutung | Beispiel |
|-------------|------------|-------------|
| `font-size` | Schriftgröße | `font-size: 16px;` |
| `font-weight` | Schriftstärke | `font-weight: bold;` |
| `text-align` | Textausrichtung | `text-align: center;` |
| `text-decoration` | Unterstreichen, Durchstreichen | `text-decoration: underline;` |

### 📏 Box-Modell
| Eigenschaft | Bedeutung | Beispiel |
|-------------|------------|-------------|
| `margin` | Außenabstand | `margin: 10px;` |
| `padding` | Innenabstand | `padding: 20px;` |
| `border` | Rahmen | `border: 1px solid black;` |
| `width` | Breite | `width: 100%;` |
| `height` | Höhe | `height: 200px;` |

### 📐 Layout & Flexbox
| Eigenschaft | Bedeutung | Beispiel |
|-------------|------------|-------------|
| `display` | Anzeigeart | `display: flex;` |
| `justify-content` | Horizontale Ausrichtung | `justify-content: center;` |
| `align-items` | Vertikale Ausrichtung | `align-items: center;` |
| `grid-template-columns` | Spaltenraster | `grid-template-columns: 1fr 1fr;` |

### 🔹 Beispiel: Einfache CSS-Regeln
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    margin: 20px;
    padding: 20px;
}
```

---

📌 **Tipp:** HTML strukturiert Inhalte, während CSS das Styling übernimmt! 🚀
