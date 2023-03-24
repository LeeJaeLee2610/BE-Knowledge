const queueName = "hello";

import amqplib from "amqplib";

const sendMsg = async () => {
  const connection = await amqplib.connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName, { durable: false });
  console.log(`Waitting ${queueName}`);
  channel.consume(
    queueName,
    (msg) => {
      console.log(`Received ${msg.content.toString()}`);
    },
    { noAck: true }
  );
};

sendMsg();
