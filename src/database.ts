

// snippet-start:[dynamodb.JavaScript.table.createTableV3]
import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, PutCommand,ScanCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const create_table = async () => {
  const command = new CreateTableCommand({
    TableName: "web_metadata",
    AttributeDefinitions: [
      {
        AttributeName: "url_name",
        AttributeType: "S",
      }
    ],
    KeySchema: [
      {
        AttributeName: "url_name",
        KeyType: "HASH",
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  });
  const response = await client.send(command);
  return response;
};

export const query_by_url_name = async (url_name) => {
  const command = new QueryCommand({
    TableName: "web_metadata",
    KeyConditionExpression:
      "url_name = :url_name",
    ExpressionAttributeValues: {
      ":url_name": url_name
    },
    ConsistentRead: true,
  });
  const response =  await docClient.send(command);
  return response;
};

export const query_by_date = async (data_ini, date_end) => {
  const command= new ScanCommand({
      TableName: 'web_metadata',
      FilterExpression: "date_creation >= :data_ini and date_creation <= :date_end",
      ExpressionAttributeValues: {
          ":data_ini": data_ini,
          ":date_end": date_end
      }
  });
  const response =  await docClient.send(command);
  return response;
};
  
export const scan_by_attribute = async (attribute, value) => {
  const input= new ScanCommand({
      TableName: 'web_metadata',
      FilterExpression: "#l = :ldapGroups",
      ExpressionAttributeNames: {
          "#l": attribute
      },
      ExpressionAttributeValues: {
          ":ldapGroups": value
      }
  });
  
  const response =  await docClient.send(input);
  return response;
};

export const put_item = async (item) => {
  const command = new PutCommand({
    TableName: "web_metadata",
    Item: item,
  });

  await docClient.send(command).then(
      (data) => {
       return data;
      },
      (error) => {
        return error;
      }
    );
  
};