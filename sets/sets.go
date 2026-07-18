/*
Because go doesnt have an native implementation of the set I have writen one down below.
*/
package sets

import (
	"errors"
	"iter"
)

// Set - representation of a set data structure
type Set[T comparable] struct {
	elements map[T]struct{}
}

func NewSet[T comparable]() *Set[T] {
	return &Set[T]{
		elements: make(map[T]struct{}),
	}
}

// Add - adds an element to our Set
func (s *Set[T]) Add(el T) {
	s.elements[el] = struct{}{}
}

// Delete - removes an element from our set if it exists
func (s *Set[T]) Delete(el T) error {
	if _, exists := s.elements[el]; !exists {
		return errors.New("element not present in set")
	}

	delete(s.elements, el)
	return nil
}

// Contains - checks to see if an element exists within the set
func (s *Set[T]) Contains(el T) bool {
	_, exists := s.elements[el]
	return exists
}

// ---------------------- Printing Methods ------------------------- //

// List - prints out all of the elements within our set
func (s *Set[T]) List() []T {
	result := make([]T, 0, len(s.elements))

	for el := range s.elements {
		result = append(result, el)
	}

	return result
}

// Len - returns the size/length of the set - the number of values it contains
func (s *Set[T]) Len() int {
	return len(s.elements)
}

// All returns an iterator over all the values in the set.
// Feed it to a loop to see your set. It is more performant than List().
func (s *Set[T]) All() iter.Seq[T] {
	return func(yield func(T) bool) {
		for v := range s.elements {
			if !yield(v) {
				return
			}
		}
	}
}

// ---------------------- Auxiliary Methods ------------------------- //

// Union returns the set union of s with other. It creates a new set.
func (s *Set[T]) Union(other *Set[T]) *Set[T] {
	result := NewSet[T]()
	for v := range s.elements {
		result.Add(v)
	}
	for v := range other.elements {
		result.Add(v)
	}
	return result
}

// Intersection returns the set intersection of s with other.
// It creates a new set where the old ones intersect.
func (s *Set[T]) Intersection(other *Set[T]) *Set[T] {
	result := NewSet[T]()
	for v := range s.elements {
		if other.Contains(v) {
			result.Add(v)
		}
	}
	return result
}

// Difference returns the set difference s - other. It creates a new set.
func (s *Set[T]) Difference(other *Set[T]) *Set[T] {
	result := NewSet[T]()
	for v := range s.elements {
		if !other.Contains(v) {
			result.Add(v)
		}
	}
	return result
}
