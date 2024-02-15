#nodejs sederhana dengan framework expressjs.

pastikan sebelumnya telah menginstall paket diperlukan yaitu :

- mysql

    - cara install

        $ npm install mysql

    - tampilkan list paket
    
        $ npm list
  
            ├── express@4.18.0
        
            └── mysql@2.18.1


buat file json secara manual dan isinya.

- package.json

- app.js





jalankan

> node app.js
    op:
    Server running on port 3000






desclimer:

saat menjalankan pertama kali pada container mysql maka akan terdapat error sebagai berikut:

❯ node app.js



Server berjalan pada port 3000
Koneksi ke database gagal:  Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client


untuk mengatasi hal tersebut lakukan langkah berikut:



❯ mysql -h 127.0.0.1 -P 3309 -u root -p --ssl-mode=DISABLED
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
Query OK, 0 rows affected (0.03 sec)



mysql> use ujimysqlkudb;

mysql> select * from users;

+------+---------+--------+

| id   | nama    | alamat |

+------+---------+--------+

|    1 | andara  | jaksel |

|    2 | sukiman | bekasi |

+------+---------+--------+

2 rows in set (0.00 sec)




lanjut coba jalankan kembali aplikasi

❯ node app.js

Server berjalan pada port 3000
Terhubung ke database MySQL

eksekusi dengan CURL:

curl -X POST -H "Content-Type: application/json" -d \
'{"id": 4, "nama": "abdurrahman", "alamat": "tangerang"}' \
http://localhost:3000/data




output :

{"message":"Data berhasil ditambahkan"}%





check data

❯ mysql -h 127.0.0.1 -P 3309 -u root -p --ssl-mode=DISABLED

Enter password: password

mysql> use ujimysqlkudb;

mysql> select * from users;

+------+-------------+-----------+

| id   | nama        | alamat    |

+------+-------------+-----------+

|    1 | andara      | jaksel    |

|    2 | sukiman     | bekasi    |

|    3 | makaela     | bekasi    |

|    4 | abdurrahman | tangerang |

+------+-------------+-----------+

4 rows in set (0.00 sec)

