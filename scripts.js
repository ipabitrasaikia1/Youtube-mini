


    let video = document.getElementById("videos")
    let query = document.getElementById("query").value

    async function searchVideos() {
        let query = document.getElementById("query").value

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=AIzaSyB2Ij-SYpZRmmaBT4BpYs9c0jIe4JiNbA0`)

        let data = await res.json()
        console.log("data", data);
         appendVideos(data.items)
    }

    showMostPopular()


    function appendVideos(video_data) {

        // console.log(video_data)
        video.innerHTML = null;
        let Home = document.getElementById("Home")
    
      Home.innerHTML = null


        video_data.forEach(({ id: { videoId },snippet: {title} }) => {


            console.log("video", videoId)

            // console.log(title)
            let div1 = document.createElement("div")    
            let div = document.createElement("div");
            div1.style = "margin-bottom:30px;overflow:hidden; border: 1px ;width:700px;margin:auto"
            let p = document.createElement("div")

            div.innerHTML = `<iframe width="700px" height="250px" src="https://www.youtube.com/embed/${videoId}"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            p.textContent = title
            p.style = "width:700px;overflow:hidden;font-size: 20px;border:1px ;font-weight:bold;"


            div1.append(div,p)
            video.append(div1)


        });

    }




  async function showMostPopular(){

    let res = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyB2Ij-SYpZRmmaBT4BpYs9c0jIe4JiNbA0")

    let data =await res.json();

    console.log(data.items)

    appendMostpopular(data.items)



   }


   function appendMostpopular(allData){ 

    let Home = document.getElementById("Home")
    Home.innerHTML = null
    let h = document.createElement("p")
    h.textContent = "MOST POPULAR VIDEOS"
    Home.append(h)

    video.innerHTML = null;

      allData.forEach(({ id,snippet: {title} }) =>{

        // console.log("id",id,"title:",title) 


        let div1 = document.createElement("div")    
            let div = document.createElement("div");
            div1.style = "margin-bottom:30px;overflow:hidden; border: 1px;width:700px;margin:auto"
            let p = document.createElement("div")

            div.innerHTML = `<iframe width="700px" height="250px" src="https://www.youtube.com/embed/${id}"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            div.style = "margin-top : 10px"  
            p.textContent = title
            p.style = "width:700px;overflow:hidden;font-size: 20px;border:1px ;font-weight:bold;"


            div1.append(div,p)
            video.append(div1)


 


      })

   }

