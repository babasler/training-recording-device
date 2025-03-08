package trd.backend;

public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++)
        {
            System.out.println("Hello, World from Maven and Docker Compose!");
            try{
                Thread.sleep(1000);
            }
            catch (InterruptedException e){
                e.printStackTrace();
            }
        }

    }
}

