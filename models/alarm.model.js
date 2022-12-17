const mongoose=require('mongoose');

const alarmSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    kind: {
        type: String,
        enum: ['alarm', 'defect']
    },
    boxNo: String,
    lampNo: String,
    description: String,
    section:{
        type:String,
        enum:['turbine', 'boiler', 'aux equipments', 'electric', 'common'],
        required:true
    },
    system:{
        type:String,
        required:true
    },
    device: String,
    sensor: String,
    limit: String,
    causes: String,
    reqActions: String
});

module.exports=mongoose.model('Alarm',alarmSchema);