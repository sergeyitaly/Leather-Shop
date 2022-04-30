import csv, sqlite3

con = sqlite3.connect(":memory:") # change to 'sqlite:///your_filename.db'
cur = con.cursor()

with open('shop_category.csv','r') as fin: # `with` statement available in 2.5+
    # csv.DictReader uses first line in file for column headings by default
    dr = csv.DictReader(fin) # comma is default delimiter
    to_db = [(i['id'], i['name'], i['slug'], i['photo']) for i in dr]

cur.executemany("INSERT INTO shop_category (id, name, slug, photo) VALUES (?, ?, ?, ?);", to_db)
con.commit()
con.close()