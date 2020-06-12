import React from 'react'
const Pages = (props) =>{
    const {pages,total_page,updatePage}=props;

  
    return(
        <div>
            <button>
{pages}
            </button>
            <button>
{total_page}
            </button>
            <button
            >
next
            </button>
            <button
            >
prev
            </button>
        </div>
    )
}
export default Pages
// запустити функцыю пр  клыу ка обновляэ значення