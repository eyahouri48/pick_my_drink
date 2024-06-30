import express from "express";
import axios from "axios";
import ejs from "ejs";
const app =express();
app.use(express.static("public"));
const port=3000;
app.get("/",(req,res)=>{
    res.render("mood.ejs");
});
app.get("/happy",async (req,res)=>{
    try {
        const result = await axios.get("https:www.thecocktaildb.com/api/json/v1/1/random.php");
        const drink =result.data.drinks[0];
        res.render("happy.ejs", { content: drink.strDrink ,
            image: drink.strDrinkThumb
        });
      } catch (error) {
        res.render("happy.ejs", { content: error.response.data });
      }
});
app.get("/frustrated",async (req,res)=>{
    try {
        const result = await axios.get("https:www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
        const drink=result.data.drinks[Math.floor(Math.random() * result.data.drinks.length)];
        res.render("frustrated.ejs", { content:drink.strDrink,
            image :drink.strDrinkThumb
         });
      } catch (error) {
        res.render("frustrated.ejs", { content: error.response.data });
      }
});
app.get("/flirty",async (req,res)=>{
    try {
        const result = await axios.get("https:www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute");
        const drink = result.data.drinks[Math.floor(Math.random() * result.data.drinks.length)];
        res.render("flirty.ejs", { content:drink.strDrink ,
            image :drink.strDrinkThumb
        });
      } catch (error) {
        res.render("flirty.ejs", { content: error.response.data });
      }
});
app.get("/exhausted",async (req,res)=>{
    try {
        const result = await axios.get("https:www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        const drink=result.data.drinks[Math.floor(Math.random() * result.data.drinks.length)];
        res.render("exhausted.ejs", { content:drink.strDrink ,
            image :drink.strDrinkThumb
        });
      } catch (error) {
        res.render("exhausted.ejs", { content: error.response.data });
      }
});
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});