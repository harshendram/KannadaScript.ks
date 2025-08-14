namaskara
    // Welcome to KannadaScript!
    helu "Namaskara! Welcome to KannadaScript";
    
    // Variables and data types
    idu name = "Ravi";
    idu age = 25;
    idu isStudent = sari;
    
    helu "Name: " + name;
    helu "Age: " + age;
    helu "Is student:";
    helu isStudent;
    
    // Arrays (saalu)
    idu numbers = [1, 2, 3, 4, 5];
    helu "First number: " + numbers[0];
    helu "Last number: " + numbers[4];
    
    // Dictionary (dict) - let's try simpler approach
    idu person_name = "Priya";
    idu person_city = "Bengaluru";
    idu person_age = 22;
    
    helu "Person name: " + person_name;
    helu "Person city: " + person_city;
    
    // Conditional logic
    enadru (age >= 18) {
        helu "You are an adult!";
    } illa andre {
        helu "You are a minor.";
    }
    
    // Loop example
    helu "Counting:";
    idu i = 1;
    ellivargu (i <= 3) {
        helu "Count: " + i;
        i = i + 1;
    }
    
    helu "KannadaScript demo completed!";
matte sigona
