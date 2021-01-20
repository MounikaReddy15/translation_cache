const qs = require("qs");
const redis = require("redis");
// create redis client
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);
const fetch = require("node-fetch");

function getISOCode(lang) {
  if (lang == "Afrikaans") {
    return "af";
  } else if (lang == "Albanian") {
    return "sq";
  } else if (lang == "Arabic") {
    return "ar";
  } else if (lang == "Armenian") {
    return "hy";
  } else if (lang == "Azerbaijani") {
    return "az";
  } else if (lang == "Basque") {
    return "eu";
  } else if (lang == "Belarusian") {
    return "be";
  } else if (lang == "Bengali") {
    return "bn";
  } else if (lang == "Bosnian") {
    return "bs";
  } else if (lang == "Bulgarian") {
    return "bg";
  } else if (lang == "Catalan") {
    return "ca";
  } else if (lang == "Cebuano") {
    return "ceb";
  } else if (lang == "Chinese") {
    return "zh-CN";
  } else if (lang == "Croatian") {
    return "hr";
  } else if (lang == "Czech") {
    return "cs";
  } else if (lang == "Danish") {
    return "da";
  } else if (lang == "Dutch") {
    return "nl";
  } else if (lang == "English") {
    return "en";
  } else if (lang == "Esperanto") {
    return "eo";
  } else if (lang == "Estonian") {
    return "et";
  } else if (lang == "Filipino") {
    return "tl";
  } else if (lang == "Finnish") {
    return "fi";
  } else if (lang == "French") {
    return "fr";
  } else if (lang == "Galician") {
    return "gl";
  } else if (lang == "Georgian") {
    return "ka";
  } else if (lang == "German") {
    return "de";
  } else if (lang == "Greek") {
    return "el";
  } else if (lang == "Gujarati") {
    return "gu";
  } else if (lang == "Haitian Creole") {
    return "ht";
  } else if (lang == "Hausa") {
    return "ha";
  } else if (lang == "Hebrew") {
    return "iw";
  } else if (lang == "Hindi") {
    return "hi";
  } else if (lang == "Hmong") {
    return "hmn";
  } else if (lang == "Hungarian") {
    return "hu";
  } else if (lang == "Icelandic") {
    return "is";
  } else if (lang == "Igbo") {
    return "ig";
  } else if (lang == "Indonesian") {
    return "id";
  } else if (lang == "Irish") {
    return "ga";
  } else if (lang == "Italian") {
    return "it";
  } else if (lang == "Japanese") {
    return "ja";
  } else if (lang == "Javanese") {
    return "jw";
  } else if (lang == "Kannada") {
    return "kn";
  } else if (lang == "Khmer") {
    return "km";
  } else if (lang == "Korean") {
    return "ko";
  } else if (lang == "Lao") {
    return "lo";
  } else if (lang == "Latin") {
    return "la";
  } else if (lang == "Latvian") {
    return "lv";
  } else if (lang == "Lithuanian") {
    return "lt";
  } else if (lang == "Macedonian") {
    return "mk";
  } else if (lang == "Malay") {
    return "ms";
  } else if (lang == "Maltese") {
    return "mt";
  } else if (lang == "Maori") {
    return "mi";
  } else if (lang == "Marathi") {
    return "mr";
  } else if (lang == "Mongolian") {
    return "mn";
  } else if (lang == "Nepali") {
    return "ne";
  } else if (lang == "Norwegian") {
    return "no";
  } else if (lang == "Persian") {
    return "fa";
  } else if (lang == "Polish") {
    return "pl";
  } else if (lang == "Portuguese") {
    return "pt";
  } else if (lang == "Punjabi") {
    return "pa";
  } else if (lang == "Romanian") {
    return "ro";
  } else if (lang == "Russian") {
    return "ru";
  } else if (lang == "Serbian") {
    return "sr";
  } else if (lang == "Slovak") {
    return "sk";
  } else if (lang == "Slovenian") {
    return "sl";
  } else if (lang == "Somali") {
    return "so";
  } else if (lang == "Spanish") {
    return "es";
  } else if (lang == "Swahili") {
    return "sw";
  } else if (lang == "Swedish") {
    return "sv";
  } else if (lang == "Tamil") {
    return "ta";
  } else if (lang == "Telugu") {
    return "te";
  } else if (lang == "Thai") {
    return "th";
  } else if (lang == "Turkish") {
    return "tr";
  } else if (lang == "Ukrainian") {
    return "uk";
  } else if (lang == "Urdu") {
    return "ur";
  } else if (lang == "Vietnamese") {
    return "vi";
  } else if (lang == "Welsh") {
    return "cy";
  } else if (lang == "Yiddish") {
    return "yi";
  } else if (lang == "Yoruba") {
    return "yo";
  } else if (lang == "Zulu") {
    return "zu";
  } else return null;
}
// module.exports.translates = function (req, res) {
//   try {
//     console.log("translate", req.body.word);
//     // const { word } = req.params;
//     for (var i = 0; i < langAry.length; i++) {
//       let item = langAry[i];
//       translate(req.body.word, { from: "en", to: langAry[i] }).then((res) => {
//         localeObj[item] = "'" + res.text + "'";
//       });
//     }
//   } catch (err) {
//     res.json({ message: err });
//   }
// };

// module.exports.cache = function (req, res, next) {
//   console.log("cache");
//   const translation = req.body.word;
//   client.get(translation, (err, data) => {
//     if (err) throw err;
//     if (data != null) {
//       // res.send(setResponse(translation, data));
//       return res.status(200).json({
//         translation: data,
//       });
//     } else {
//       next();
//     }
//   });
// };

module.exports.translate = function (req, res) {
  try {
    let tl = getISOCode(req.body.target);
    let sl = getISOCode(req.body.source);
    var translate = req.body.word.concat(req.body.target);
    client.get(translate, (err, data) => {
      if (err) throw err;
      else if (data != null) {
        return res.status(200).json({
          translation: data,
        });
      } else {
        const body = {
          q: req.body.word,
          source: sl,
          target: tl,
          // Tamil,
        };

        const qsBody = qs.stringify(body);

        fetch(
          "https://google-translate1.p.rapidapi.com/language/translate/v2",
          {
            method: "POST",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "accept-encoding": "application/gzip",
              "x-rapidapi-key":
                "efd96d4048msh44f73d6266d5b84p174ac5jsn0b65722b3082",
              "x-rapidapi-host": "google-translate1.p.rapidapi.com",

              "Content-Length": qsBody.length,
            },
            body: qsBody,
          }
        )
          .then((response) => response.json())
          .then((response) => {
            console.log("response from fetch");
            let text = response.data.translations[0].translatedText;

            client.setex(translate, 3600, text);

            return res.status(200).json({
              message: "Text Translated!",
              data: {
                translation: text,
              },
            });
          });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
