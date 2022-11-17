import * as React from 'react';
import './style.css';


interface UserCardProps{
name:string;
age:string;
books:string;
level:string;
image:any;
}
interface BookCardProps{
title:string;
emoji:string;
}

function UCard({name,age,books,level,image}:UserCardProps){
return(
  <div>
    <h1>{name}</h1>
    <ul>
      <li>{age}</li>
      <li>{books}</li>
      <li>{level}</li>
      </ul>
      <img src={image} alt={name}/>
  </div>
);
}
function BCard({title,emoji}:BookCardProps){
  return(
    <div>
      <h3>{title}</h3>
      <p>{emoji}</p>
    </div>
  )
  }


export default function Card() {
  return (
    <div>
      <UCard name="Petr Rychlý" age="Věk:18" books="Moje knihy:4" level="Level:3" image="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png" />
      <BCard title="Moje kniha 1" emoji="📕"/>
      <BCard title="Moje kniha 2" emoji="📘"/>
      <BCard title="Moje kniha 3" emoji="📗"/>
    </div>
  );
}
