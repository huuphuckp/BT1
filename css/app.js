.menu ul li{
    display: inline-block;
    position: relative;
}
.menu ul li a{
    display: block;
}
.menu ul{
    padding: 0px;
    margin: 0px;
    text-align: center;
    background-color: rgb(85, 70, 111);
    list-style: none;
}
.menu ul li a{
    text-decoration: none;
    font-size: large;
    font-variant: small-caps;
    color: white;
    padding: 0 10px;
    line-height: 40px;
}
.menu ul li a:hover{
    color: white;
    background-color: rgb(10, 10, 35);
}
.menu ul ul{
    padding: 0px;
margin: 0px;
list-style: none;
 border-radius:  3px;
 width: 200px;
 background-color: white;
 box-shadow: 0 0 10x gray;
    position: absolute;
    display: none;
    z-index: 1;
}
.menu ul ul a{
    line-height: 30px;
    color: black;
    text-decoration: none;
    font-size: large;
    font-variant: small-caps;
    padding: 0 10px;
    display: block;
}
.menu ul li:hover ul{
    display: block;
}
.menu ul ul a{
    color: white;
    background-color: rgb(85, 70, 111);
}
.banner{
    background: url(../img/banner.jpg) center;
    height: 600px;
    width: 98%;
    background-size: 100% 100%;
    position: relative;

    margin-top: 20px;
    margin-left: 15px;
  }
  hr{
    width: 250px;
  }
  .text{
    position: absolute;
    right: 100px;
    bottom: 100px;
    color: white;
  }
  .text h3{
    font-size: 40px;
  }
  .text h3 b{
    margin-left: 55px;
  }
 .p1{
    margin-left: 10px;
  }
  .text p{
    text-align: center;
    font-size: 18px;
    margin-top: 15px;
  }
  .timkiem{
    position: absolute;
    right: 50px;
    bottom: 30px;
  }
  .timkiem button{
    height: 40px;
    color: white;
    font-weight: bold;
    border-radius: 100px;
    background-color: rgb(61, 61, 95);
    width: 90px;
  }
  .timkiem input{
    height: 40px;
    width: 200px;
    border-radius: 100px;
  }
  table{
    margin-left: 13px;
  }
  table .content1 .huongduong1 img{
    border-radius: 5px ;
    position: absolute;
    top: 30px;
  }
  article{
    position: relative;
  }
  table .content1 .nd1{
    position: absolute;
    top: 30px;
    right: 400px;
    font-size: 20px;
   font-variant: small-caps;
  }
  table .content2 .huongduong2 img{
    border-radius: 5px ;
    position: absolute;
    top: 350px;
  }
  table .content2 .nd2{
    position: absolute;
    top: 350px;
    right: 400px;
    font-size: 20px;
   font-variant: small-caps;
  }
  .line{
    width: 100%;
  }
  footer{
    background-color: rgb(148, 152, 190);
    width: 100%;
   position: absolute;
    height: 50px;
    margin-top: 700px;
  }
  footer h3{
    text-align: center;
    color: white;
    margin-top: 10px;
  }