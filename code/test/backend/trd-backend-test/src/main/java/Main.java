import trd.mqtt.broker;
import trd.mqtt.publisher;
import trd.mqtt.subscriber;

public class Main
{
	public static void main(String[] args)
	{
		System.out.println("started Programm");
		trd.mqtt.broker.start();
	}
}