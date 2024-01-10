//
//  ContentView.swift
//  Fullstack Notes
//
//  Created by Jack Kelley on 1/10/24.
//

import SwiftUI

struct ContentView: View {
    
    @State var notes: [Note] = []
    @State var showSheet: Bool = false
    
    var body: some View {
        NavigationStack {
            List (notes) {note in
                Text(note.text)
            }
            .onAppear(perform: {
                fetchNotes()
            })
            .navigationTitle("Notes")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button(action: {
                        print("Add note!")
                        showSheet.toggle()
                    }, label: {
                        Image(systemName: "plus")
                    })
                    .sheet(isPresented: $showSheet, onDismiss: fetchNotes, content: {
                        AddNoteView()
                    })
                }
            }
        }
        
    }
    
    func fetchNotes() {
        let url = URL(string: "http://localhost:3001/api/notes")!
        
        let task = URLSession.shared.dataTask(with: url) {data, response, error in
            guard let data = data else { return }
            
            
            
            do {
                let decoder = JSONDecoder()
                let notes = try decoder.decode([Note].self, from: data)
                self.notes = notes
            } catch {
                print(error)
            }
            
            
//            print(String(data: data, encoding: .utf8))
        }.resume()
    }
}

#Preview {
    ContentView()
}
