package trd.mqtt.broker;

import io.moquette.broker.Server;
import io.moquette.broker.config.MemoryConfig;

import java.io.IOException;
import java.util.Properties;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class broker
{
	private Logger logger = LogManager.getLogger(broker.class);
	public void start()
	{
		Server mqttBroker = new Server();
		Properties properties = new Properties();
		properties.setProperty("port", "1883"); // Standard MQTT-Port

		try
		{
			mqttBroker.startServer(new MemoryConfig(properties));
			logger.info("Broker läuft auf Port 1883...");

			// Stoppen, wenn das Programm beendet wird
			Runtime.getRuntime().addShutdownHook(new Thread(() ->
			{
				mqttBroker.stopServer();
				logger.info("🛑 Moquette Broker gestoppt.");
			}));

		}
		catch(IOException e)
		{
			logger.error(e);
		}
	}
}


