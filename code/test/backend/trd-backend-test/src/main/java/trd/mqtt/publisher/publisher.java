package trd.mqtt.publisher;

import org.eclipse.paho.client.mqttv3.*;

public class publisher
{
	private static final String BROKER_URL = "tcp://localhost:1883"; // Moquette läuft lokal
	private static final String TOPIC = "sensor/temp";

	public static void start()
	{
		try
		{
			// MQTT-Client erstellen
			MqttClient client = new MqttClient(BROKER_URL, MqttClient.generateClientId());
			client.connect();
			System.out.println("✅ MQTT Publisher verbunden!");

			// Nachricht senden
			while(true)
			{
				String message = "Temperatur: " + (Math.random() * 100);
				client.publish(TOPIC, new MqttMessage(message.getBytes()));
				System.out.println("📤 Nachricht gesendet: " + message);
				Thread.sleep(1000);
			}

			//client.disconnect();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}


