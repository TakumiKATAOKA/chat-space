# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null:false,unique:true|
|mail|string|null: false,unique:true|

### Association
- has_many :groups, throught: members
- has_many :messages
- has_many :members


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false,unique:true|

### Association
- has_many :users, throught: members
- has_many :members
_ has_many :messages

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
|body|text||
|image|text| |
|data|timestamps|null: false|

### Association
- belongs_to :user
- belongs_to :group