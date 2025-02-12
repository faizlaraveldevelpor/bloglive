import Addition from "../Compunents/Addition"
import Breaking_news from "../Compunents/Breaking_news"
import Show_cetagory_in_home from "../Compunents/Show_cetagory_in_home"
import Helmet from 'react-helmet'
function Blogs() {
  return (
<>

<div className="max-w-[1300px]">
<Helmet>
     <title>Home page</title>
     <meta name="description" content="faiz ansari description" />
 </Helmet>
<div className="flex flex-col items-center ">
<div className=" md:block hidden  ">
<Breaking_news/>
</div>

</div>
<div className=" md:mt-10 md:flex md:flex-col md:items-center  "><Addition/></div>
<div className="flex flex-col items-center ">
  <Show_cetagory_in_home/>
</div>
</div>

</>
  )
}

export default Blogs