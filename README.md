# DB設計

##usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null:false,unique:true|
|mail|string|null: false,unique:true|

### Association
- has_many :groups, throught: members
- has_many :messages
- has_many :members


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|index:true, null:false,unique:true|

### Association
- has_many :users, throught: members
- has_many :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: foreign_key: true|
|image|text| foreign_key: true|
|data|timestamps|null: false|

### Association
- belongs_to :users