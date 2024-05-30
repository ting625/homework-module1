  //Convert from HTML to JavaScript section partners

  var filesNames = [
    "partner-bustour",
    "partner-cabinrental",
    "partner-campingadv",
    "partner-collegetours",
    "partner-rentalbike",
    "partner-tourgroup"
    ];

    //type HTMLLiListElement
    const listElement = document.createElement('ul');

    //create for loop to create 6 images    
    for(var i=0; i< filesNames.length; i++) {

    //type HTMLULListElement
    const imageListElement = document.createElement('li');
    imageListElement.classList.add('partner');

    const imageElement = document.createElement('img');
    imageElement.src = 'images/partners/' + filesNames[i] + '.png';
    imageListElement.appendChild(imageElement);

    listElement.appendChild(imageListElement);
    }
    
    //display our images
    document.getElementById("partners").innerHTML = "";
    document.getElementById("partners").appendChild(listElement);
