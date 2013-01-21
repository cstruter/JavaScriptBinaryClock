/*	Simple Javascript Binary Clock
	Copyright (c) 2010 CS Truter
	Written by Christoff Truter
	email: Christoff@cstruter.com 
*/

function DecToBin(value)
{			
	var result = '';
	while(value != 0)
	{
		result = (((value % 2) > 0) ? '1' : '0') + result;
		value = value >> 1;
	}
	return result;
}

function binaryClock()
{
	var current = new Date();
	
	var units = [['h', DecToBin(current.getHours())], 
				['m', DecToBin(current.getMinutes())], 
				['s', DecToBin(current.getSeconds())]];
			
	document.getElementById('hr').innerHTML = current.getHours();
	document.getElementById('mr').innerHTML = current.getMinutes();
	document.getElementById('sr').innerHTML = current.getSeconds();
			
	for(var i = 0; i < 6; i++)
	{	
		for(var u = 0; u < units.length; u++)
		{
			var id = units[u][0] + Math.pow(2, i);
			var obj = document.getElementById(id);
			
			if (obj != null) 
			{
				obj.className = 'inactive';
				obj.innerHTML = '0';
				var index = (units[u][1].length - 1) - i;
				if (index > -1)
				{
					if (units[u][1].charAt(index) == '1')
					{
						obj.className = 'active';
						obj.innerHTML = '1';
					}
				}
			}
		}
	}
	setTimeout(binaryClock, 1000);
}