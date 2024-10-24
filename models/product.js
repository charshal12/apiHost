const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default:'4.8', 
    },
    createdAt: {
        type: Date,
        default:Date.now(), 
    },
    company: {
        type: String,
        enum:{
            values:["TechCorp","AudioWorld","Gamer's Hub","Wearables Inc.","SoundTech","VisionHome","SmartLiving","DentalCare","ChargeHub","SecureHome","RelaxTech","SoundSphere", "CleanTech","KitchenGenius","CookMaster","HealthTech","KitchenAid","PetClean","SoundWave","BreatheEasy","FitDesk", "SmartScale","AirGuard","SmartHome","CleanSweep","HomeScents","KitchenGadget","BrewMaster","CarCare","GreenThumb","KitchenGenius","WineTech", "NutriBlend","FizzMaker","CookwarePro","GrillTech","KitchenGadget","SousVideTech","CuttingEdge","CookSmart","PreserveTech","KitchenBasics", "CoolTech", "BakeMaster", "EcoHome", "SecureHome", "SmartHome", "BrightHome", "HomeGuard", "PetWatch", "GreenTech", "KitchenEssentials", "CoolBreeze", "BrewTech", "DessertTech", "RelaxTech", "HealthTech", "CleanTech", "BreatheEasy", "WarmHome", "VisionTech", "SecureHome", "SmartHome", "SafetyTech", "HomeEssentials", "OutdoorGear", "Traveler's Choice", "EcoSafe", "TravelTech", "Traveler's Choice", "TravelSmart", "VisionTech", "OutdoorGear", "KitchenTech", "CuttingEdge", "JuiceMaster", "GardenGurus", "CookSmart", "BakewarePro", "KitchenEssentials", "Eco...","PetCare","GrillMaster","MixItUp","LightTech","Memories","ChargePro","ChargeTech","WarmTech","EcoTech","EcoFriendly"],
            message: `{VALUE} is not supported`,
        }, 
    },
    
});

module.exports = mongoose.model("Product", productSchema);