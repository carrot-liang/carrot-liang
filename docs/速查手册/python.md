---
title: Python 速查手册
createTime: 2025/08/18 09:40:24
permalink: /blog/56wtkezd/
---

## 配置

### 仓库指向

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip config set install.trusted-host pypi.tuna.tsinghua.edu.cn
```

### 依赖

```bash
pip3 install pipreqs

pipreqs .  #项目依赖生成requirements

pip3 install -r requirements.txt # 据依赖清单批量安装包

pip download -r requirements.txt -d ./offline_packages # 将依赖离线至本地

python -m pip install --no-index --no-deps ./offline_packages/*.whl # 从本地安装依赖
```

### 虚拟环境管理

```bash
# 创建虚拟环境
python3 -m venv myenv

# 激活虚拟环境
source myenv/bin/activate

# 在虚拟环境中安装依赖
pip install -r requirements.txt

# 退出虚拟环境
deactivate
```

## 基础语法

### 变量和赋值
```python
name = "Python"
age = 25
a, b, c = 1, 2, 3
```

### 数据类型
```python
# 数字
integer = 42
float_num = 3.14

# 字符串
string = "Hello, World!"

# 布尔值
true_val = True
false_val = False

# 空值
none_val = None
```

## 数据结构

### 列表 (List)
```python
numbers = [1, 2, 3, 4, 5]
numbers.append(6)           # 添加元素
numbers.remove(3)           # 删除元素
length = len(numbers)       # 获取长度

# 列表切片
first_three = numbers[:3]   # [1, 2, 3]
last_three = numbers[-3:]   # [3, 4, 5]

# 列表推导式
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]
```

### 字典 (Dictionary)
```python
person = {"name": "Alice", "age": 25}
person["email"] = "alice@example.com"  # 添加/修改
value = person.get("age", 0)           # 获取值，默认值0
keys = person.keys()                    # 获取所有键
values = person.values()                # 获取所有值
```

### 元组 (Tuple)
```python
coordinates = (10, 20)
x, y = coordinates  # 解包
```

## 控制流

### 条件语句
```python
if age < 18:
    print("未成年")
elif age < 65:
    print("成年人")
else:
    print("老年人")

# 三元运算符
status = "成年" if age >= 18 else "未成年"
```

### 循环
```python
# for循环
for i in range(5):
    print(i)

for key, value in person.items():
    print(f"{key}: {value}")

# while循环
count = 0
while count < 5:
    print(count)
    count += 1
```

## 函数

### 函数定义
```python
def greet(name):
    return f"Hello, {name}!"

# 默认参数
def greet_with_default(name="World"):
    return f"Hello, {name}!"

# Lambda函数
square = lambda x: x**2
```

## 文件操作

### 文件读写
```python
# 读取文件
with open("file.txt", "r", encoding="utf-8") as f:
    content = f.read()
    lines = f.readlines()

# 写入文件
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello, World!")
```

## 错误处理

### 异常处理
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零")
except Exception as e:
    print(f"发生错误: {e}")
finally:
    print("总是执行")
```

## 常用内置函数

### 类型转换和操作
```python
str_num = str(123)
int_num = int("456")
max_value = max([1, 2, 3, 4, 5])
min_value = min([1, 2, 3, 4, 5])
sum_total = sum([1, 2, 3, 4, 5])
sorted_list = sorted([3, 1, 4, 1, 5])

# 枚举
for index, value in enumerate(['a', 'b', 'c']):
    print(f"{index}: {value}")
```

## 字符串操作

### 字符串方法
```python
text = "  Hello, World!  "
upper_text = text.upper()           # 转大写
lower_text = text.lower()           # 转小写
stripped = text.strip()             # 去除首尾空格
replaced = text.replace("World", "Python")  # 替换
words = text.split(",")             # 分割

# 格式化
formatted = "Hello, {}!".format("World")
f_string = f"Hello, {name}!"
```

## 实用技巧

### 列表去重
```python
# 保持顺序
unique_ordered = list(dict.fromkeys([1, 2, 2, 3, 3, 4]))
```

### 字典合并
```python
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged = {**dict1, **dict2}
```

### 条件表达式
```python
# 列表推导式中的条件
result = [x for x in range(10) if x % 2 == 0]
```
