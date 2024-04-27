package Reciever

import (
	"github.com/sijiramakun/seapick/utils"
	"net"
)

func Receive() {

	ip := getLocalIP()
	port := findAvailablePort()
	addr := ip + ":" + port

	listener, err := net.Listen("tcp", addr)
	utils.CheckError(err)

	defer listener.Close()

	println("Server has started on Address ", addr)

	for {
		conn, err := listener.Accept()
		utils.CheckError(err)
		go handleIncomingRequests(conn)

	}

}
