package trd.mqtt;

import io.moquette.broker.Server;
import io.moquette.broker.config.MemoryConfig;

import java.io.IOException;
import java.util.Properties;

public class broker
{
	public broker()
	{
		start();
	}
	public static void start()
	{
		Server mqttBroker = new Server();
		Properties properties = new Properties();
		properties.setProperty("port", "1883"); // Standard MQTT-Port

		try
		{
			mqttBroker.startServer(new MemoryConfig(properties));
			System.out.println("🚀 Moquette MQTT Broker läuft auf Port 1883...");

			// Stoppen, wenn das Programm beendet wird
			Runtime.getRuntime().addShutdownHook(new Thread(() ->
			{
				mqttBroker.stopServer();
				System.out.println("🛑 Moquette Broker gestoppt.");
			}));

		}
		catch(IOException e)
		{
			e.printStackTrace();
		}
	}
}


