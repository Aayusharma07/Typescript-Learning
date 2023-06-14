// Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).

// default
enum defaultExample {
    north,
    east,
    south,
    west,
  }
  
  console.log(defaultExample.north);
  console.log(defaultExample.west);
  
  // initialized
  
  enum initializedExample {
    north = 1,
    east,
    south,
    west,
  }
  
  console.log(initializedExample.north);
  console.log(initializedExample.west);
  
  // fully initialized
  enum fullyInitialized {
    ram = 1,
    shyam = 2,
    ravi = 3,
    vijay = 4,
  }
  
  console.log(fullyInitialized.ram);
  console.log(fullyInitialized.ravi);
  
  //string enum
  enum dataEnum {
    demo = "TTL",
    code = '300',
  }
  
  console.log(dataEnum.demo);