# Schnittstellendefinition
## Dashboardcharts -> Backend /data/[Component]
### Nächstes Training
Pfad : /data/nextTraining
```json
{
header: 'Nächstes Training',
description: 'Ganzkörpertraining'
}
```
Der Header für die nächste Trainingseinheit ist immer gleich. Die Description Variiert nach Trainingsplan und ist immer der Name der Trainingseinheit die als nächstes ansteht. Zum Beispiel Ganzkörper, Oberkörper, Unterkörper, Push, Pull, Legs etc. 

### Letztes Training
Pfad: /data/lastTraining
```json
{
header: 'Letztes Training',
description: 'Ganzkörpertraining'
}
```
### Trainingdauer der letzten sieben Tage
Pfad: /data/trainingDuration
```json
{
header: 'Trainingsdauer',
description: '7 Tage: Xh Xmin'
}
```
### Durschnittlicher Puls der letzen sieben Tage
Pfad: /data/pulse
```json
{
header: 'Puls',
description: 'Durchnittlich X bpm'
}
````
### Akutelles Gewicht
Pfad: /data/weight 
```json
{
header: 'Aktuelles Gewicht',
description: 'X kg'
}
```