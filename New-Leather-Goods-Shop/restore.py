import csv, sqlite3
#1
con = sqlite3.connect("db.sqlite3") # change to 'sqlite:///your_filename.db'
cur = con.cursor()
#cur.execute("CREATE TABLE shop_category (id, name, slug, photo);") # use your column names here

with open('shop_category.csv','r') as fin: # `with` statement available in 2.5+
    # csv.DictReader uses first line in file for column headings by default
    dr = csv.DictReader(fin) # comma is default delimiter
    to_db = [(i['id'], i['name'], i['slug'], i['photo']) for i in dr]

cur.executemany("INSERT INTO shop_category (id, name, slug, photo) VALUES (?, ?, ?, ?);", to_db)
con.commit()
con.close()


#2 coment 1 then run 2
con = sqlite3.connect("db.sqlite3") # change to 'sqlite:///your_filename.db'
cur = con.cursor()
#cur.execute("CREATE TABLE shop_category (id, name, slug, photo);") # use your column names here

with open('shop_product.csv','r') as fin: # `with` statement available in 2.5+
    # csv.DictReader uses first line in file for column headings by default
    dr = csv.DictReader(fin) # comma is default delimiter
    to_db2 = [(i['id'], i['name'], i['slug'], i['description'], i['price'], i['stock'], i['available'], i['created'], 
             i['updated'], i['photo'], i['category_id'], i['photo2'], i['color'], i['brandimage']) for i in dr]

cur.executemany("INSERT INTO shop_product ('id','name', 'slug','description', 'price', 'stock', 'available', 'created','updated', 'photo', 'category_id','photo2','color','brandimage') VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", to_db2)
con.commit()
con.close()