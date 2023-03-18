const AWS = require('aws-sdk');
const uuid = require('sequential-uuid');
require('dotenv').config();

//configure aws
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const AUTHENTICATION = process.env.AUTHENTICATION_TABLE;

exports.createAccount = async(user)=>{
    const params = {
        TableName: AUTHENTICATION,
        Item: {...user}
    }
    try{
        const results = await dynamoClient.put(params).promise();
        return results;
    }catch(e){
        throw e;
    }
};