const accessKey="0ZOiljJNHzKBVbcL6oYILV2_CMgqFBn3vOWJS-fndDY";

const SearchForm=document.getElementById('search-form');
const SearchBox=document.getElementById('search-box');
const SearchResults=document.getElementById('search-results');
const SearchMoreBtn=document.getElementById('search-more-btn');


let keyword="";
let page=1;


async function SearchImage(){
    keyword=SearchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement('img');
        image.src=result.urls.small;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;

        imageLink.target="_blank";

        imageLink.appendChild(image);
        SearchResults.appendChild(imageLink);
    })
    SearchMoreBtn.style.display="block";

}

SearchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    SearchImage();
})

SearchMoreBtn.addEventListener('click',()=>{
    page++;
    SearchImage();
})