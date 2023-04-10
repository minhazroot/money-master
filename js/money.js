// Step 1 make a function to get all costing 
function CostingTotal(Costing) {
    const foodFildelement = document.getElementById(Costing);
    const foodFildString = foodFildelement.value;
    const FoodCosting = parseInt(foodFildString);
    return FoodCosting;
}
document.getElementById('Total_Calculate_btn').addEventListener('click', function () {

    //step 1.5 calcut all costing

    const FoodCosting = CostingTotal('Food_field');
    const RentCosting = CostingTotal('Rent_field');
    const ClothesCosting = CostingTotal('Clothes_field');
    const totalCosting = FoodCosting + RentCosting + ClothesCosting;
    const TotalDesplay = document.getElementById('Total_Expenses');
    TotalDesplay.innerText = totalCosting;

    //step 2 Get incame Total 
    const incameElement = document.getElementById('income_field');
    const incomeString = incameElement.value;
    const incameAmount = parseInt(incomeString);

    const blance = incameAmount - totalCosting;
    // step 3 get blance desplay 
    const blanceElement = document.getElementById('Balance_Expenses');
    blanceElement.innerText = blance;



})
//step 4 calcuit save many
document.getElementById('Mk_save').addEventListener('click', function () {
    // console.log('save many');
    // step 5 get last total blance
    const LestblanceElement = document.getElementById('Balance_Expenses');
    const blanseString = LestblanceElement.innerText;
    const blanceNew = parseFloat(blanseString)
    //step 6 Get save parsentes 
    const SaveFeldElement = document.getElementById('Save_feild');
    const saveFeldString = SaveFeldElement.value;
    const Savemany = parseFloat(saveFeldString)
    const saveManyTotal = blanceNew / Savemany;

    //step 7 Get save amount desplay 
    const SaveDesplay = document.getElementById('Save_amount_desplay')

    SaveDesplay.innerText = saveManyTotal;
    ///get total cost for devise
    const TotalDesplayElement = document.getElementById('Total_Expenses');
    const TotalString = TotalDesplayElement.innerText;
    const LesttotalCost = parseFloat(TotalString);
    //total save amount
    const totalSaveElement = document.getElementById('Save_amount_desplay')
    const saveString = totalSaveElement.innerText;
    const SaveAmount = parseFloat(saveString);
    const totalNewCost = SaveAmount + LesttotalCost;
    //step 2 Get incame Total 
    const incameElement = document.getElementById('income_field');
    const incomeString = incameElement.value;
    const incameAmount = parseInt(incomeString);
    ////
    const lestTotel = incameAmount - totalNewCost;
    //get Remaining Balance desplay
    const RemaiNingDisplay = document.getElementById('Remaining_desplay')
    RemaiNingDisplay.innerText = lestTotel


})