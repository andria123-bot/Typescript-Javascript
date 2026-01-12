wheat_count = 0
wheat_multiply = 1
is_ready = False

def harvest_wheat():
  global wheat_count, is_ready
  wheat_count += 1
  is_ready = False
  
def plant_wheat():
  global is_ready
  is_ready = True
  print("Wheat has been planted and is now ready to be harvested.")

def shop():
  return 1

while True:
  if is_ready:
    inp = input("Wheat is ready to be harvested, Would you like to harvest it? (y/n): ")
    if inp.lower() == "y":
      harvest_wheat()
      print(f"You have harvested wheat. Total wheat count: {wheat_count}")
    elif inp.lower() == "n":
      print("Okay, have good time!")
      break
  else:
    inp = input("Wheat is not planted, would you like to plant wheat? (y/n): ")
    if inp.lower() == "y":
      print("Planting wheat...")
      plant_wheat()
    elif inp.lower() == "n":
      print("Okay, have good time!")
      break