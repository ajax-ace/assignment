
let groceryList = [];
let totalPrice = 0;

function addItem() {
	let item = document.getElementById("item").value;
	let price = parseFloat(document.getElementById("price").value);
	if (item && price) {
		let newRow = document.createElement("tr");
		let itemCell = document.createElement("td");
		let priceCell = document.createElement("td");
		let deleteCell = document.createElement("td");
		let deleteButton = document.createElement("button");
		itemCell.textContent = item;
		priceCell.textContent = price.toFixed(2);
		deleteButton.textContent = "Delete";
		deleteButton.addEventListener("click", function() {
			deleteItem(this);
		});
		deleteCell.appendChild(deleteButton);
		newRow.appendChild(itemCell);
		newRow.appendChild(priceCell);
		newRow.appendChild(deleteCell);
		document.getElementById("groceryList").appendChild(newRow);
		groceryList.push({item: item, price: price});
		totalPrice += price;
		document.getElementById("totalPrice").textContent = "Total price: $" + totalPrice.toFixed(2);
		document.getElementById("item").value = "";
		document.getElementById("price").value = "";
	}
}

function deleteItem(button) {
	let row = button.parentNode.parentNode;
	let itemIndex = Array.prototype.indexOf.call(row.parentNode.children, row) - 1;
	let item = groceryList.splice(itemIndex, 1)[0];
	totalPrice -= item.price;
	row.parentNode.removeChild(row);
	document.getElementById("totalPrice").textContent = "Total price: $" + totalPrice.toFixed(2);
}
