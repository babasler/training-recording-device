import trd.mqtt.broker;
import trd.mqtt.publisher;
import trd.mqtt.subscriber;

public class Main
{
	public static void main(String[] args)
	{
		System.out.println("started Programm");
		broker broker = new broker();
		try
		{
			Thread.sleep(1000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
		trd.mqtt.subscriber.start();
		trd.mqtt.publisher.start();
	}
}