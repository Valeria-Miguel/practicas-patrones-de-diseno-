Patrón Prototype
El patrón Prototype basa su funcionalidad en la clonación de objetos, estos nuevos objetos son creados mediante un pool de prototipos elaborados previamente y almacenados. Este patrón es especialmente útil cuando necesitamos crear objetos basados en otros ya existentes o cuando se necesita la creación de estructuras de objetos muy grandes, este patrón nos ayuda también a ocultar la estrategia utilizada para clonar un objeto. fuente: https://reactiveprogramming.io/blog/es/patrones-de-diseno/prototype

Aqui se utilizo el patron prototyoe utiizando utensilios y subclases concretas Cuchillo y Tenedor. Cada subclase implementa el método clonar para permitir la clonación de objetos.

los archivos estan de la siguiente forma:
-**Utensilio.js**: se define la clase Utensilio define la estructura básica de un utensilio de cocina. Contiene atributos comunes como material y tamano, y métodos abstractos clonar y mostrar que deben ser implementados por las subclases
-**Cuchillo.js**:subclase que implementa los métodos clonar y mostrar. En el método clonar se crea una nueva instancia de Cuchillo con los mismos valores de material, tamaño y filo. Es clase cuchillo que viene de utensilio 
-**Tenedor.js**: subclase que implementa los métodos clonar y mostrar. En el método clonar, se crea una nueva instancia de Tenedor con los mismos valores de material, tamaño y dientes. Es clase tenedor que se extiende de utensilio.
-**index.js**: aqui se creala instancia de cuchillo y tenedor junto con sus caracteristicas se clona el utensilio y despues se muestran los detalles del original y despues del clonado