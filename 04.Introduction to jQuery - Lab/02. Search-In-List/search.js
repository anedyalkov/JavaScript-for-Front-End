function search() {
   let towns = $('#towns li');
   let text = $('#searchText').val();
   let count = 0;

   for(let town of towns){
       let currentTown = town.textContent;
       if (currentTown.includes(text)) {
           $(town).css('font-weight','bold');
           console.log(town);
           count++;
       }
       else{
           $(town).css('font-weight', '');
       }
   }
   $('#result').text(`${count} matches found`);

}