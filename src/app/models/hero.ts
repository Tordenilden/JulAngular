export class Hero{
  id:number=0; //2022 or 2021 it need to be initialized or public whatever
  name:string="";
  RealName:string=""; // this is not gonna work!!
  place?:string=""; // can be null [JsonIgnore]
  debutYear:Date=new Date();
}
// pipes | en type
