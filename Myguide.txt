React 
    เป็นตัวช่วยในการจัดการตัว UI ให้อยู่ในรูปแบบของ Component 
    คือเป็นส่วนของหน้าบ้านอย่างเดียวและต้องหาส่วนอื่นๆมาเติมให้กับมัน 

Node.js 
    เอาไว้ช่วยเรื่องฝั่ง Back-end

CSS Framework
    react-bootstrap **น่าสนใจ**

Arrow Function, =>
    คือการเขียนรูป Function แบบย่อเช่น
    Normal
        function add(a,b){
            return a+b;
        }

    Arrow
        const add = (a,b) => a+b

props 
    การส่งค่าจาก Component A(Paren) ไปที่ Component B(clidren)

    let {CurrentUser} = this.props 
        หมายความว่าให้ตัวแปล CurrentUser มีค่าเท่ากับ this.props.CurrentUser

    {isLogin && CurrentUser}
        หมายความถ้าซ้าย(isLogin) เป็นจริงให้มีค่าเท่ากับฝั่งขวา(CurrentUser)

    แบบด้านล่างนี้เรียกว่าการทำ children props
    แบบที่ 1 
    App.js
        <CardList>
            {
                this.state.marvel.map(marvel => <h3 key = {marvel.id}>{marvel.name}</h3>)
            }
        </CardList>

    CardList
        export const CardList = props => <div className ='card-list'>{props.children}</div>
    
    แบบที่ 2
    App.js 
        <div>
          <CardList marvel = {this.state.marvel}/>
        </div>
    CardList
        export const CardList = props => 
            (<div className ='card-list'>
                {props.marvel.map(marvel => 
                    (<h3 key = {marvel.id}>{marvel.name}</h3>))
                }
            </div>);



state
    สิ่งที่ Component เก็บข้อมูลไว้เอง
    การเปลี่ยนค่าใน State ต้องใช้ setSate({..})

map()
    คือฟังชั่น foreach loop ในการดึงค่าที่อยู่ใน Array ออกมา
    ex
        this.state.marvel.map(marvel => <h3 key = {marvel.id}>{marvel.name}</h3>)

Ract Life Cycele
    ComponentDidMount() 
        ปกติจะใช้ในการกำหนดค่าทุกๆอย่างที่ต้องใช้ DOM และรับข้อมูลที่ต้องการมาแสดงผล

        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => console.log(users))
        }
        fetch คือฟังชั่นที่ใช้ในการดึงข้อมูล
        .then คือหลังจากที่ดึงมาแล้วให้ทำอะไร

Synthetic Event
    React จะมีสิ่งที่เรียกว่า Synthetic Event ซึ่งจะช่วยให้ event ในทุก Browser ทำงานได้ไม่แตกต่างกัน
    โดยเราจะได้รับ Synthetic Event จาก Event Handler หลังจากเกิด Event นั่นเอง
    JavaScript Synthetic Event ก็คือ Object { } ธรรมดาๆ นี่เอง
    ใน Synthetic Event มี key ที่ใช้บ่อยๆคือ
        .target ใช้สำหรับอ่านค่าจาก element ที่เกิด event
        .preventDefault() ใช้ยกเลิก default action ของ HTML