# D&D Shop

## Setup

1. Clone this repository
1. `cd` into the directory it creates
1. Open another terminal window and `cd` into the directory labeled "api."
1. Run `json-server --watch database.json --port 8088`
1. Run `npm install` and wait for all dependencies to be installed
1. Run `npm run dev` to verify that installation was successful.

## What is D&D Shop?

This D&D Shop acts as a virtual marketplace for your D&D games. As a Dungeon Master, you can:
* Create a shop inventory from the wide array of items currently in our database.
* Add your own homebrew items.
* Edit items to fit your needs.
* Manage the gold your players have.
* Keep track of what items your players have purchased.

### Searching and Filtering

Any page that displays large quantities of items will give you the option to filter items by three separate methods.
1. By rarity of the item.
    * Common
    * Uncommon
    * Rare
    * Very Rare
    * Legendary
2. By search term.
3. By item tags
    * Armor
    * Weapon
    * Potion
    * Scroll
    * Light Armor
    * Medium Armor
    * Heavy Armor
    * Robes
    * Martial Weapon
    * Simple Weapon
    * Ranged Weapon
    * Staff
    * Attuned
    * Ring
    * Rod

## For Dungeon Masters

### Shop

As a DM user, the shop view allows you to see what your players will see, and allow you to remove items you no longer want in the shop.

### All Items

As a DM, the `All Items` view displays the full array of items stored in the database. Here you can `Delete`, `Edit`, or `Add to Shop`. 
Clicking the `Delete` button on an item will remove it from the database.
Clicking on the `Edit` button on an item will bring you to a form to edit the parameters of that specific item.
Clicking on `Add to Shop` will bring you to a form to add the item to the shop that user's can buy from. Here is where you set the quantity parameter.

### New Wares Have Arrived

As a DM, clicking on `New Wares Have Arrived` will bring you to a form to create a new item that will be added to the database. Here you will set the Name, Rarity, Description, Cost, and tags for this item. You can have more than one tag. Clicking `Save Item` will save the item in the database and redirect you to the `All Items` page.

### See All Purchases

As a DM, the `See All Purchases` view displays a list of all items that have been purchased and the player who purchased it.

### View Players

As a DM, the `View Players` view lists out all players in your game, their player character name, and how much gold they currently have.

Clicking on `Add Gold` will bring you to a form to set a new gold amount for the player.
**NOTE**: This does not add to the user's gold, it sets a new amount.

## For Players

### Shop

As a player user, the `Shop` is where you will browse through the shop's inventory for items you want. Clicking `Add to Cart` will add one of that item to your cart, and remove it from the amount of that item in the shop. If an item runs out, you will not be able to add it to your cart.

Your current gold amount is displayed in the top left corner at all times.

### Your Cart

As a player, the `Your Cart` view displays all items that you have added to your cart from the shop. It will display the items, the cost of the item, and the total cost of your cart. 

Next to each item is an `x` button that will remove the item from your cart. When an item is remove from your cart, it the amount available in the store is restored so it is available to others for purchase.

Clicking on `Purchase` when your current gold is less than the total cost of your cart, you will receive a window alert informing you that you have insufficient funds.

Clicking on `Purchase` when your current gold is more than the total cost of your cart, you cart will be cleared out and the items will be added to your purchases.



### Your Purchases

As a player, the `See Your Purchases` view will display a list of all items you've purchased for future reference.

## Logout

As a player and DM, clicking on `Logout` will log out the current user.