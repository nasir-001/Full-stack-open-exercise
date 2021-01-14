const dummy = () => 1

const totalLikes = array => {
    return array.reduce(function(a, b) {
        return a + b
    }, 0)
}

// const favouriteBlog = array => {
//     // array.map(element => {
//     //     // return Math.max(element.likes)
//     //     element.forEach(blog => {
//     //         if(Math.max(blog.like)) {
//     //             return blog
//     //         }
//     //     });
//     // });
//     // array.find(ele=>ele.like==Math.max.apply(null,array.map(v=>v.like)))
// }   

const favouriteBlog = array => {
   var currentmax=0;
var maxblog=null
    array.forEach(element => {
            currentmax=Math.max(currentmax,element.likes)
            //console.log(currentmax)
if (currentmax==element.likes) maxblog=element
})
console.log(maxblog)
return maxblog
} 
module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}