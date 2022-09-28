var persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" },
  ];
  
  function getFullName(item) {

    let fullName = persons.firstname +persons.lastname;
    return  console.log(fullName);;
  }
  
  

  //맵을 이용해 풀네임을 만들자
 persons.map(getFullName);

  

 