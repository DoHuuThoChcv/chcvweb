function checkdate() {
    var d1 = document.getElementById("FromDate").value;
    var d2 = document.getElementById("EndDate").value;

    if (d1 > d2) {
        document.getElementById("EndDate").value = d1;
        document.getElementById("EndDate").min = d1;
    } else {
        document.getElementById("EndDate").min = d1;

    }
}

//  ---------------- Panigation JS ---------------------
getPagination('#table-id');

function getPagination(table) {
//     var lastPage = 1;
     $('#maxRows')
         .on('change', function (evt) {

             lastPage = 1;
             $('.pagination')
                 .find('li')
                 .slice(2, -2)
                 .remove();
             var trnum = 0; // reset tr counter
             var maxRows = parseInt($(this).val()); // get Max Rows from select option

             if (maxRows == 5000) {
                 $('.pagination').hide();
             } else {
                 $('.pagination').show();
             }

             var totalRows = $(table + ' tbody tr').length; // numbers of rows
             $(table + ' tr:gt(0)').each(function () {
                 // each TR in  table and not the header
                 trnum++; // Start Counter
                 if (trnum > maxRows) {
                     // if tr number gt maxRows

                     $(this).hide(); // fade it out
                 }
                 if (trnum <= maxRows) {
                     $(this).show();
                 } // else fade in Important in case if it ..
             }); //  was fade out to fade it in
             if (totalRows > maxRows) {
                 // if tr total rows gt max rows option
                 var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
                 //	numbers of pages
                 for (var i = 1; i <= pagenum;) {
                     // for each page append pagination li
                     $('.pagination #prev')
                         .before(
                             '<li data-page="' +
                             i +
                             '">\
                             <span>' +
                             i++ +
                             '<span class="sr-only">(current)</span></span>\
                           </li>'
                         )
                         .show();
                 } // end for i'
             } // end if row count > max rows
             $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li
             $('.pagination li').on('click', function (evt) {
                 // on click each page
                evt.stopImmediatePropagation();
                 evt.preventDefault();

                 var pageNum = $(this).attr('data-page'); // get it's number
                 var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option
                 var totalRows = $(table + ' tbody tr').length;
                 var numd = (totalRows%maxRows)

                 if(numd > 0){
                    var numd = ((totalRows) / (maxRows)) + 1;
                  }else{
                    var numd = (totalRows/maxRows);
                  }
//                 if (totalRows % 10 == 0) {
//                     var numd = ((totalRows) / (maxRows));
//                 } else {
//                     var numd = ((totalRows) / (maxRows)) + 1;
//                 }

                 var endnum = Math.floor(numd)


                 if (pageNum == 'prev') {
                     if (lastPage == 1) {
                         return;
                     }
                     pageNum = --lastPage;
                 }
                 if (pageNum == 'next') {
                     if (lastPage == $('.pagination li').length - 2) {
                         return;
                     }
                     pageNum = ++lastPage;
                 }

                 if (pageNum == 'first') {
                     if (lastPage == 1) {
                         return;
                     }
                     pageNum = 1;
                 }
                 if (pageNum == 'end') {
                     if (lastPage == endnum) {
                         return;
                     }
                     pageNum = endnum;
                 }

                 if (pageNum > endnum) {
                     pageNum = endnum;
                 }

                // console.log("lastPageBefore:"+lastPage)
                // console.log("pagenumNow:"+pageNum)
                // console.log("endnum:"+endnum)

                 lastPage = pageNum;
                //console.log("lastPageNow:"+lastPage)
                // console.log("------------------")

                 var trIndex = 0; // reset tr counter
                 $('.pagination li').removeClass('active'); // remove active class from all li
                 $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
                 limitPagging();
                 $(table + ' tr:gt(0)').each(function () {
                     // each tr in table not the header
                     trIndex++; // tr index counter
                     // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
                     if (
                         trIndex > maxRows * pageNum ||
                         trIndex <= maxRows * pageNum - maxRows
                     ) {
                         $(this).hide();
                     } else {
                         $(this).show();
                     } //else fade in
                 }); // end of for each tr in table
             }); // end of on click pagination list
             limitPagging();
         })
         .val(10)
         .change();

     // end of on select change

     // END OF PAGINATION
 }

function limitPagging() {
    // alert($('.pagination li').length)

    if ($('.pagination li').length > 8) {
        if ($('.pagination li.active').attr('data-page') <= 3) {
            $('.pagination li:gt(5)').hide();
            $('.pagination li:lt(5)').show();
            $('.pagination [data-page="next"]').show();
            $('.pagination [data-page="end"]').show();

        }
        if ($('.pagination li.active').attr('data-page') > 3) {
            $('.pagination li:gt(1)').hide();
            $('.pagination [data-page="next"]').show();
            $('.pagination [data-page="end"]').show();

            for (let i = (parseInt($('.pagination li.active').attr('data-page')) - 2); i <= (parseInt($('.pagination li.active').attr('data-page')) + 2); i++) {
                $('.pagination [data-page="' + i + '"]').show();
            }
        }
    }
}