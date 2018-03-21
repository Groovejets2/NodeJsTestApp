function CellOn(thisCell) {
	var thisCellId = thisCell.id;
	var thisCellObject = document.getElementById(thisCellId);
	thisCellObject.innerHTML = thisCellId;
	thisCellObject.className = "cellon";
}

function returnCellOneBelow(sThisCellId)
{
	
}

function CellOff(thisCell) {
	var thisCellId = thisCell.id;
	var thisCellObject = document.getElementById(thisCellId);
	thisCellObject.innerHTML = "";
	thisCellObject.className = "celloff";
}

function CellClick(myCell) {
	if(CheckForBingo() == false) {
		if(myCell.className != 'cellclick')	{
			myCell.className='cellclick';
		}
		if(CheckForBingo()) {
			document.getElementById("bingostatusleft1").innerHTML = 'BINGO!';
			document.getElementById("bingostatusleft2").innerHTML = 'Click the Reset button to try again';
			document.getElementById("bingostatusleft1").className='msgblinkon';
			document.getElementById("bingostatusleft2").className='msgblinkoffsmall';
		}
	}
}

function ResetCells() {
   cells=document.getElementById('bingogrid').getElementsByTagName('td');
    for(var i=0; i<cells.length; i++)  {
	  if(cells[i].className == 'cellclick') {
		cells[i].className='celloff';
	  }
    }
	document.getElementById("bingostatusleft1").innerHTML = '';
	document.getElementById("bingostatusleft2").innerHTML = '';
	document.getElementById("bingostatusleft1").className='msgblinkoff';
}

function CheckForBingo() {
	if(CheckForBingoRows() || CheckForBingoColumns()) {
		return true;
	} else {
		return false;
	}

}

function CheckForBingoRows() {

	var row1=0;
	var row2=0;
	var row3=0;
	var row4=0;
	var row5=0;

	var rowcount1=0;
	var rowcount2=0;
	var rowcount3=0;
	var rowcount4=0;
	var rowcount5=0;

	row1=document.getElementById('row1').getElementsByTagName('td');
	row2=document.getElementById('row2').getElementsByTagName('td');
	row3=document.getElementById('row3').getElementsByTagName('td');
	row4=document.getElementById('row4').getElementsByTagName('td');
	row5=document.getElementById('row5').getElementsByTagName('td');

	for(var i=0; i<row1.length; i++)  { if(row1[i].className == 'cellclick'){ rowcount1++; } }
	for(var i=0; i<row2.length; i++)  { if(row2[i].className == 'cellclick'){ rowcount2++; } }
	for(var i=0; i<row3.length; i++)  { if(row3[i].className == 'cellclick'){ rowcount3++; } }
	for(var i=0; i<row4.length; i++)  { if(row4[i].className == 'cellclick'){ rowcount4++; } }
	for(var i=0; i<row5.length; i++)  { if(row5[i].className == 'cellclick'){ rowcount5++; } }

	if(rowcount1 == 5 || rowcount2 == 5 || rowcount3 == 5 || rowcount4 == 5 || rowcount5 == 5) { 
		return true; 
	} else { 
		return false; 
	}
}

function CheckForBingoColumns() {

	var col1=0;
	var col2=0;
	var col3=0;
	var col4=0;
	var col5=0;

	var colcount1=0;
	var colcount2=0;
	var colcount3=0;
	var colcount4=0;
	var colcount5=0;
	
	var cols = document.getElementsByTagName( 'td' );

	for(var i=0;i<cols.length;i++){
	  if(cols.item(i).getAttribute( 'name' ) == 'c1' && cols.item(i).className == 'cellclick') {
		colcount1++;
	  }
	}
	for(var i=0;i<cols.length;i++){
	  if(cols.item(i).getAttribute( 'name' ) == 'c2' && cols.item(i).className == 'cellclick') {
		colcount2++;
	  }
	}
	for(var i=0;i<cols.length;i++){
	  if(cols.item(i).getAttribute( 'name' ) == 'c3' && cols.item(i).className == 'cellclick') {
		colcount3++;
	  }
	}
	for(var i=0;i<cols.length;i++){
	  if(cols.item(i).getAttribute( 'name' ) == 'c4' && cols.item(i).className == 'cellclick') {
		colcount4++;
	  }
	}
	for(var i=0;i<cols.length;i++){
	  if(cols.item(i).getAttribute( 'name' ) == 'c5' && cols.item(i).className == 'cellclick') {
		colcount5++;
	  }
	}

	if(colcount1 == 5 || colcount2 == 5 || colcount3 == 5 || colcount4 == 5 || colcount5 == 5) { 
		return true;
	} else {
		return false;
	}

}
