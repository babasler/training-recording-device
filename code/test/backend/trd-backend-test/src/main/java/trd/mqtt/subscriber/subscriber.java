package trd.mqtt.subscriber;

import org.eclipse.paho.client.mqttv3.*;

public class subscriber
{
	private static final String BROKER_URL = "tcp://localhost:1883"; // Moquette läuft lokal
	private static final String TOPIC = "sensor/temp";

	public static void start()
	{
		try
		{
			MqttClient client = new MqttClient(BROKER_URL, MqttClient.generateClientId());
			client.connect();
			System.out.println("✅ MQTT Subscriber verbunden!");

			// Topic abonnieren
			client.subscribe(TOPIC, (topic, message) ->
			{
				String payload = new String(message.getPayload());
				System.out.println("📩 Nachricht erhalten: " + payload);

				// 🔹 Hier könnte die Nachricht in eine Datenbank gespeichert werden
				// saveToDatabase(payload);
			});

		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}
