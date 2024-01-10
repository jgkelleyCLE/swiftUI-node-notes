//
//  AddNoteView.swift
//  Fullstack Notes
//
//  Created by Jack Kelley on 1/10/24.
//

import SwiftUI

struct AddNoteView: View {
    
    @State var text: String = ""
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        HStack {
            TextField("Add new note...", text: $text)
                .textFieldStyle(.roundedBorder)
                
            Button("Add") {
                postNote()
            }
            .buttonStyle(.borderedProminent)
            
//            Button(action: postNote) {
//                Text("Add")
//            }
//            .buttonStyle(.borderedProminent)
            
        }
        .padding(.horizontal, 15)
    }
    
    func postNote() {
        let params = ["text" : text] as [String : Any]
        
        let url = URL(string: "http://localhost:3001/api/notes")!
        
        let session = URLSession.shared
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        
        do {
            request.httpBody = try? JSONSerialization.data(withJSONObject: params, options: .prettyPrinted)
        } catch let error {
            print(error)
        }
        
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.addValue("application/json", forHTTPHeaderField: "Accept")
        
        let task = session.dataTask(with: request) {data, response, error in
            guard error == nil else { return }
            guard let data = data else { return }
            
            do {
                if let json = try JSONSerialization.jsonObject(with: data, options: .mutableContainers) as? [String: Any] {
                    print(json)
                }
            }catch {
                print(error)
            }
        }.resume()
        
        self.text = ""
        dismiss()
    }
}

#Preview {
    AddNoteView()
}
