// For the assignement purpose I will mockup the result of a DataBase.
let availableTranslation = ["EnglishUS", "EnglishUK", "FrenchFR", "FrenchCA", "Hebrew"]

module.exports = {

    getTranslations : function getTranslations(languageCode){
        return availableTranslation.filter((x) => x.startsWith(languageCode));
    }
}
