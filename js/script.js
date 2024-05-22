const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    },
];


const outputElement = document.querySelector('#output')

for (i = 0; i < team.length; i++) {
    /*  console.log('Member '+ (i+1)); */
    const articleElement = document.createElement('article')
    const h2Element = document.createElement('h2')
    const pElement = document.createElement('p');
    const imgElement = document.createElement('img');
    outputElement.appendChild(articleElement);
    articleElement.appendChild(imgElement);
    articleElement.appendChild(h2Element);
    articleElement.appendChild(pElement);
    h2Element.append(team[i].name);
    pElement.append(team[i].role);
    imgElement.src = "img/" + team[i].pic;

    /*   for (let key in team[i]){
          console.log(key, (team[i])[key]);
          pElement.append((team[i])[key]);
      }; */
};

