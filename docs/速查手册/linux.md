---
title: Linux 命令速查
createTime: 2025/08/01
---

## 📁 文件与目录操作

### 基础文件操作
```bash
# 列出文件和目录
ls                    # 列出当前目录内容
ls -la               # 列出所有文件（包括隐藏文件）的详细信息
ls -lh               # 以人类可读格式显示文件大小
ls -t                # 按修改时间排序

# 切换目录
cd /path/to/dir      # 切换到指定目录
cd ~                 # 切换到用户主目录
cd ..                # 返回上级目录
cd -                 # 返回上次访问的目录
pwd                  # 显示当前工作目录

# 创建和删除
mkdir dirname        # 创建目录
mkdir -p dir1/dir2   # 创建多级目录
rmdir dirname        # 删除空目录
rm -rf dirname       # 强制删除目录及其内容（谨慎使用）

# 复制、移动、重命名
cp file1 file2       # 复制文件
cp -r dir1 dir2      # 复制目录
mv file1 file2       # 移动或重命名文件
mv dir1 dir2         # 移动目录
```

### 文件查看和编辑
```bash
# 查看文件内容
cat filename         # 显示文件全部内容
head filename        # 显示文件前10行
head -n 20 filename  # 显示文件前20行
tail filename        # 显示文件后10行
tail -n 20 filename  # 显示文件后20行
tail -f filename     # 实时查看文件变化

# 文件搜索
find /path -name "*.txt"    # 查找指定路径下的.txt文件
find /path -type f -mtime -7  # 查找7天内修改的文件
grep "pattern" filename     # 在文件中搜索文本
grep -r "pattern" /path     # 递归搜索目录中的文本
```

### 文件权限和属性
```bash
# 权限管理
chmod 755 filename   # 修改文件权限
chmod +x filename    # 添加执行权限
chown user:group filename  # 修改文件所有者
chgrp group filename # 修改文件组

# 文件信息
stat filename        # 显示文件详细信息
file filename        # 显示文件类型
du -sh filename      # 显示文件/目录大小
df -h                # 显示磁盘使用情况
```

### 链接操作
```bash
# 创建硬链接
ln target link       # 创建硬链接（指向同一inode）
ln file1 file2       # 为file1创建硬链接file2

# 创建符号链接（软链接）
ln -s target link    # 创建符号链接
ln -s /path/to/file link  # 创建指向绝对路径的符号链接
ln -s ../file link   # 创建指向相对路径的符号链接

# 强制创建链接
ln -f target link    # 强制创建链接（覆盖已存在的链接）
ln -sf target link   # 强制创建符号链接（覆盖已存在的链接）
ln -snf target link  # 强制创建符号链接（不跟踪目录链接）

# 链接管理
ls -la | grep "^l"  # 查看当前目录下的所有符号链接
readlink link        # 显示符号链接指向的目标
ls -l link          # 查看链接的详细信息

# 删除链接
rm link             # 删除符号链接（不会删除原文件）
unlink link         # 删除链接的另一种方式
```

## 🔧 系统管理

### 系统信息
```bash
# 系统信息
uname -a             # 显示系统信息
cat /etc/os-release  # 显示操作系统版本
hostname             # 显示主机名
whoami               # 显示当前用户

# 系统资源
top                  # 实时显示系统进程
free -h              # 显示内存使用情况
df -h                # 显示磁盘使用情况
```

### 进程管理
```bash
# 进程操作
ps -ef               # 显示所有进程
kill PID             # 终止进程
kill -9 PID          # 强制终止进程

# 后台任务
nohup command &      # 后台运行命令


### 压缩和解压
```bash
# 压缩
tar -czf archive.tar.gz directory  # 创建gzip压缩包

# 解压
tar -xzf archive.tar.gz            # 解压gzip压缩包
```


### 别名和函数
```bash
# 创建别名
alias ll='ls -la'          # 创建ll别名
alias grep='grep --color=auto'  # 为grep添加颜色

# 查看别名
alias                      # 列出所有别名
```

### 系统重启

```bash
# 重启系统
sudo reboot

# 或者使用 shutdown 命令
sudo shutdown -r now
```


### 服务管理

```bash
# systemd服务管理
systemctl start service_name    # 启动服务
systemctl stop service_name     # 停止服务
systemctl restart service_name  # 重启服务
systemctl status service_name   # 查看服务状态
systemctl enable service_name   # 设置开机自启
systemctl disable service_name  # 禁用开机自启

# 查看服务
systemctl list-units --type=service  # 列出所有服务
```

## 🌐 网络操作

### 网络连接
```bash
# 网络配置
ip addr              # 显示网络接口信息
ip route             # 显示路由表
ifconfig             # 显示网络接口信息
ss -tuln             # 显示监听的端口

# 网络测试
ping hostname        # 测试网络连通性
traceroute hostname  # 显示网络路径
nslookup domain      # DNS查询

# 防火墙
sudo iptables -L -v -n

# 允许 MySQL 端口 (3306)
sudo iptables -I INPUT -p tcp --dport 3306 -j ACCEPT

# 允许 Web 服务端口 (80, 443)
sudo iptables -I INPUT -p tcp -m multiport --dport 80,443 -j ACCEPT

# 允许 SSH 端口 (22)
sudo iptables -I INPUT -p tcp --dport 22 -j ACCEPT

# 保存防火墙规则
sudo netfilter-persistent save

# 重启防火墙服务
sudo systemctl restart netfilter-persistent
```

### 网络传输
```bash
# 文件传输
wget URL             # 下载文件
curl URL             # 下载文件或API请求
scp file user@host:/path  # 安全复制文件
rsync -av source dest     # 同步文件

# 网络服务
ssh user@host        # SSH连接
ssh-keygen           # 生成SSH密钥
ssh-keygen  -lf id_rsa.pub # 生成ssh公钥的SHA256指纹
ssh-copy-id user@host # 复制SSH密钥到远程主机
```


ssh-add 向认证代理 ssh-agent(1) 添加私钥身份。当不带参数运行时，它将添加文件 ~/.ssh/id_rsa、~/.ssh/id_dsa、~/ssh/id_ecdsa、~/.ssh/id_ecdsa_sk、~/.ssh/id_ed25519 和 ~/.ssh/id_ed25519_sk。加载私钥后
 ，ssh-add 将尝试加载相应的证书，通过向私钥文件的名称追加 -cert.pub 来获得的相应的证书。可选的文件名可以在命令行中给出。

```bash
ssh-add ~/.ssh/id_rsa
Identity added: /root/.ssh/id_rsa (/root/.ssh/id_rsa)

ssh-add -l # 列出 ssh-agent 中当前所代表的所有身份的指纹。
ssh-add -d ~/.ssh/id_rsa.pub  # 从 ssh-agent 中删除密钥。
```

## 📦 软件包管理

```bash
apt update           # 更新软件包列表
apt upgrade          # 升级已安装的软件包
apt install package  # 安装软件包
apt remove package   # 删除软件包
apt search keyword   # 搜索软件包
apt list --installed # 列出已安装的软件包

apt-mark showmanual # 查看手动安装的软件包（非依赖）

```
